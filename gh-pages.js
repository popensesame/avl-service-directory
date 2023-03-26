import { publish } from 'gh-pages';

publish(
 'build',
 {
  branch: 'gh-pages',
  repo: 'https://github.com/popensesame/avl-service-directory.git',
  user: {
   name: 'Matthew Geiger',
   email: 'mattpgeiger@pm.me'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);