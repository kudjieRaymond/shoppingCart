#!/usr/bin/env sh

echo 'The following "npm" command builds your vue application for'
echo 'production in the local "build" directory (i.e. within the'
echo '"/var/jenkins_home/workspace/shopping-cart" directory),'
echo 'correctly bundles React in production mode and optimizes the build for'
echo 'the best performance.'
set -x
npm run build
set +x

echo 'The following "npm" command runs your Vue application in'
echo 'development mode and makes the application available for web browsing.'
echo 'The "npm start" command has a trailing ampersand so that the command runs'
echo 'as a background process (i.e. asynchronously). Otherwise, this command'
echo 'can pause running builds of CI/CD applications indefinitely. "npm start"'
echo 'is followed by another command that retrieves the process ID (PID) value'
echo 'of the previously run process (i.e. "npm start") and writes this value to'
echo 'the file ".pidfile".'
set -x
npm run serve &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:8081 to see your Vue js application in action.'
echo '(This is why you specified the "args ''-p 8081:8081''" parameter when you'
echo 'created your initial Pipeline as a Jenkinsfile.)'
