# GIT

🤓 Deploying a non-master branch

1. When you're working in a branch other than master, you still need to push to the master branch of the heroku remote to deploy there.
2. You can push a local branch to a remote branch with a different name with the following syntax git push <originName> <localBranch>:<remoteBranch>
3. For example, to push a local branch teams to the heroku master remote branch, you would enter git push heroku teams:master

Heroku create DB:

1. heroku addons:create heroku-postgresql:hobby-dev
2. You can test that the database is running with heroku pg:info
