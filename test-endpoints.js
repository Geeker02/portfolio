// Verification script for Jaydeep Jogdand Portfolio REST API
import http from 'http';

const testEndpoint = (path, method = 'GET', postData = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (postData) {
      req.write(JSON.stringify(postData));
    }
    req.end();
  });
};

const runTests = async () => {
  console.log('--- Starting API Verification Suite ---');

  try {
    // Test 1: GET /api/v1/health
    console.log('\n[Test 1] GET /api/v1/health');
    const health = await testEndpoint('/api/v1/health');
    console.log(`Status: ${health.status}`);
    console.log(`Response: ${health.body}`);
    if (health.status !== 200) throw new Error('Health check failed');

    // Test 2: GET /api/v1/portfolio
    console.log('\n[Test 2] GET /api/v1/portfolio');
    const portfolio = await testEndpoint('/api/v1/portfolio');
    console.log(`Status: ${portfolio.status}`);
    const parsedPortfolio = JSON.parse(portfolio.body);
    console.log(`Candidate Name: ${parsedPortfolio.data.candidate.name}`);
    console.log(`Projects Count: ${parsedPortfolio.data.projects.length}`);
    if (portfolio.status !== 200 || parsedPortfolio.data.projects.length !== 1) {
      throw new Error('Portfolio fetch failed or expected exactly 1 personal project');
    }

    // Test 3: POST /api/v1/contact (Valid payload)
    console.log('\n[Test 3] POST /api/v1/contact (Valid Submission)');
    const contactValid = await testEndpoint('/api/v1/contact', 'POST', {
      name: 'Google Recruiter',
      email: 'recruiter@techcompany.com',
      subject: 'Senior Software Engineer Role',
      message: 'Hello Jaydeep, we reviewed your Core Java & Spring Boot background and would love to interview you.'
    });
    console.log(`Status: ${contactValid.status}`);
    console.log(`Response: ${contactValid.body}`);
    if (contactValid.status !== 200) throw new Error('Contact valid test failed');

    // Test 4: POST /api/v1/contact (Invalid payload - short message)
    console.log('\n[Test 4] POST /api/v1/contact (Validation Rejection)');
    const contactInvalid = await testEndpoint('/api/v1/contact', 'POST', {
      name: 'Test',
      email: 'invalid-email',
      subject: 'Hi',
      message: 'Short'
    });
    console.log(`Status: ${contactInvalid.status} (Expected 400)`);
    console.log(`Response: ${contactInvalid.body}`);
    if (contactInvalid.status !== 400) throw new Error('Validation rejection failed');

    // Test 5: GET /api/v1/resume
    console.log('\n[Test 5] GET /api/v1/resume');
    const resume = await testEndpoint('/api/v1/resume');
    console.log(`Status: ${resume.status}`);
    console.log(`Content-Type: ${resume.headers['content-type']}`);
    console.log(`Content-Disposition: ${resume.headers['content-disposition']}`);
    if (resume.status !== 200 || resume.headers['content-type'] !== 'application/pdf') {
      throw new Error('Resume streaming test failed');
    }

    console.log('\n========================================');
    console.log(' ALL 5 BACKEND VERIFICATION TESTS PASSED!');
    console.log('========================================\n');
    process.exit(0);
  } catch (error) {
    console.error('Test Suite Failed:', error);
    process.exit(1);
  }
};

runTests();
