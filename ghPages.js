import { publish } from 'gh-pages';

publish(
	'docs',
	{
		branch: 'master',
		repo: 'https://github.com/ChrisPittman343/pxls',
		user: {
			name: 'Chris Pittman',
			email: 'cpittman343@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy complete.');
	}
);
