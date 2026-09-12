export const chatsappScreenshots = [
  {
    id: 1,
    step: 'Register',
    title: 'User Registration (Sign Up)',
    description: 'Registration interface featuring client/server-side validations and BCrypt password encryption.',
    src: '/chatsapp/SignUp.jpg'
  },
  {
    id: 2,
    step: 'Login',
    title: 'User Login & Authentication',
    description: 'Authentication screen issuing stateless JWT tokens for REST APIs and WebSocket handshake authorization.',
    src: '/chatsapp/LoginPage.jpg'
  },
  {
    id: 3,
    step: 'Logout',
    title: 'Account Settings & Logout',
    description: 'Settings menu providing profile preferences, status updates, and session sign-out.',
    src: '/chatsapp/Setting_Option.jpg'
  },
  {
    id: 4,
    step: 'Home Page',
    title: 'Main Chat Dashboard',
    description: 'Central chat dashboard showing active conversation threads, recent message previews, and online status.',
    src: '/chatsapp/HomePage.jpg'
  },
  {
    id: 5,
    step: 'Profile',
    title: 'User Profile & Details',
    description: 'User profile drawer displaying current user avatar, username, and custom about status.',
    src: '/chatsapp/Profile.jpg'
  },
  {
    id: 6,
    step: 'Chat 1',
    title: 'Direct 1-on-1 Messaging',
    description: 'Active private conversation using STOMP over SockJS for instant bi-directional messaging.',
    src: '/chatsapp/Chat1.jpg'
  },
  {
    id: 7,
    step: 'Chat 2',
    title: 'Active Conversation Thread',
    description: 'Chat window demonstrating message history, dynamic bubble layouts, and real-time message exchange.',
    src: '/chatsapp/chat2.jpg'
  },
  {
    id: 8,
    step: 'Create Group',
    title: 'Create New Group',
    description: 'Group initialization view where users specify the channel name and channel details.',
    src: '/chatsapp/CreateGroup.jpg'
  },
  {
    id: 9,
    step: 'Add Member',
    title: 'Select & Add Members',
    description: 'Contact selector allowing creators to invite and add multiple users to the group channel.',
    src: '/chatsapp/Add_member_to_Group.jpg'
  },
  {
    id: 10,
    step: 'Group Picture',
    title: 'Upload Group Profile Image',
    description: 'Group profile photo upload integrated with Cloudinary cloud storage and CDN optimization.',
    src: '/chatsapp/Add_Profile_Picture_to_Group.jpg'
  },
  {
    id: 11,
    step: 'Group Created',
    title: 'Group Channel Ready',
    description: 'Confirmation of successfully created group persisted in MySQL database.',
    src: '/chatsapp/GroupCreated.jpg'
  },
  {
    id: 12,
    step: 'Group Sync',
    title: 'Multi-User Group Chat Sync',
    description: 'Real-time multi-client synchronization showing identical group conversation across active user windows.',
    src: '/chatsapp/Group_Seen_in_both_chat.jpg'
  },
  {
    id: 13,
    step: 'Status Feed',
    title: 'Status & Stories Overview',
    description: 'Ephemeral status updates feed displaying temporary posts shared by contacts.',
    src: '/chatsapp/Status_Home_Page.jpg'
  },
  {
    id: 14,
    step: 'Status View',
    title: 'Full-Screen Story Viewer',
    description: 'Interactive full-screen story viewer with progress bar timing for status updates.',
    src: '/chatsapp/Status_View.jpg'
  }
];

export default chatsappScreenshots;
