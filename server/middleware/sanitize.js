// Input sanitization and validation middleware (SEC-04)

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const sanitizeContactInput = (req, res, next) => {
  try {
    let { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, message) are required.'
      });
    }

    // Type checking
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payload data types.'
      });
    }

    // Trim whitespace
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();

    // Length validation per SRS:
    // name: 2-100 chars
    // email: RFC 5322 regex
    // subject: 3-150 chars
    // message: 10-2000 chars
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 100 characters.'
      });
    }

    if (!emailRegex.test(email) || email.length > 254) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (subject.length < 3 || subject.length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be between 3 and 150 characters.'
      });
    }

    if (message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 2000 characters.'
      });
    }

    // Strip potentially dangerous tags/characters (simple HTML escaping)
    const escapeHtml = (str) =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    req.sanitizedBody = {
      name: escapeHtml(name),
      rawName: name,
      email: email.toLowerCase(),
      subject: escapeHtml(subject),
      rawSubject: subject,
      message: escapeHtml(message),
      rawMessage: message
    };

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process input data.'
    });
  }
};
