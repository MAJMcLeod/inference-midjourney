/* eslint-disable no-underscore-dangle */

// Path Helpers
export const _getPathAPI = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'tbd');
