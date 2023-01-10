export function useProjects() {
  const gifki = {
    name: 'gifki',
    skills: [
      'JavaScript',
      'HTML',
      'Vue.JS',
      'Vuetify',
      'CSS',
      'SCSS',
      'RESTful API',
      'Tailwind',
      'Unocss',
      'Git',
      'NGINX',
      'Linux',
      'TypeScript',
    ],
    pictures: [
      {
        id: 1,
        description: 'Login page',
        picture: '/gifki/gifki-login.png',
      },
      {
        id: 2,
        description: 'Main page (unlogged)',
        picture: '/gifki/gifki-main-unlogged.png',
      },
      {
        id: 3,
        description: 'Main page (logged)',
        picture: '/gifki/gifki-main-logged.png',
      },
      {
        id: 4,
        description: 'View toggle',
        picture: '/gifki/gifki-view-toggle.png',
      },
      {
        id: 5,
        description: 'Search autocompletion',
        picture: '/gifki/gifki-globalsearch-autocompletion.png',
      },
      {
        id: 6,
        description: 'Global search',
        picture: '/gifki/gifki-globalsearch.png',
      },
      {
        id: 7,
        description: 'Publish media',
        picture: '/gifki/gifki-publish.png',
      },
      {
        id: 8,
        description: 'Upload media',
        picture: '/gifki/gifki-upload.png',
      },
      {
        id: 9,
        description: 'Channel',
        picture: '/gifki/gifki-channel.png',
      },
      {
        id: 10,
        description: 'User settings',
        picture: '/gifki/gifki-user-settings.png',
      },
      {
        id: 11,
        description: 'Media page',
        picture: '/gifki/gifki-media.png',
      },
      {
        id: 12,
        description: 'Media edit',
        picture: '/gifki/gifki-media-edit.png',
      },
      {
        id: 13,
        description: 'Media share',
        picture: '/gifki/gifki-media-share.png',
      },
      {
        id: 14,
        description: 'Media comment',
        picture: '/gifki/gifki-media-comment.png',
      },
      {
        id: 15,
        description: 'Loops page',
        picture: '/gifki/gifki-loops.png',
      },
      {
        id: 16,
        description: 'My collections',
        picture: '/gifki/gifki-mycollections.png',
      },
      {
        id: 17,
        description: 'Collection edit',
        picture: '/gifki/gifki-mycollections-edit.png',
      },
    ],
  }

  return [gifki]
}