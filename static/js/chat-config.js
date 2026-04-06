/**
 * Chat Widget Configuration
 *
 * ========================
 * DEPLOYMENT CONFIGURATION
 * ========================
 *
 * This file configures the chat widget to connect to the backend API.
 *
 * HOW IT WORKS:
 * The chat widget first checks window.CHAT_BACKEND_URL for the backend URL.
 * If not set, it falls back to the value below.
 *
 * SETTING THE BACKEND URL:
 *
 * Option 1: Set in Vercel Dashboard (recommended)
 *   - Go to Vercel Dashboard > Your Project > Settings > Environment Variables
 *   - Add: CHAT_BACKEND_URL = https://YOUR_USERNAME.YOUR_SPACE_NAME.hf.space
 *   - This is automatically injected into window.CHAT_BACKEND_URL
 *
 * Option 2: Edit the fallback value below before deploying
 *   - Change BACKEND_FALLBACK_URL to your actual HF Space URL
 *   - Example: 'https://your-username.humanoid-robotics-backend.hf.space'
 */

(function() {
  // Backend API URL — uses environment variable first, then fallback
  var BACKEND_FALLBACK_URL = 'https://YOUR_USERNAME-humanoid-robotics-backend.hf.space';

  // Try to get URL from environment variable (set by Vercel)
  var backendUrl = window.CHAT_BACKEND_URL || BACKEND_FALLBACK_URL;

  // Remove trailing slash if present
  backendUrl = backendUrl.replace(/\/$/, '');

  // Export configuration
  window.CHAT_WIDGET_CONFIG = {
    apiUrl: backendUrl + '/api/v1',
    title: 'AI Robotics Tutor',
    subtitle: 'Ask me anything about the textbook!',
    theme: 'dark'
  };
})();
