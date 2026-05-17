pipeline {
    agent any

    tools {
        // This ensures Node.js is available on your Jenkins execution path
        nodejs 'node' 
    }

    stages {
        stage('Initialize') {
            steps {
                echo 'Checking software environments...'
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Build & Test Backend') {
            steps {
                echo 'Installing Backend dependencies and running tests...'
                dir('backend') {
                    bat 'npm install'
                    bat 'NODE_ENV=test npm test'
                }
            }
        }

        stage('Build & Test Frontend') {
            steps {
                echo 'Installing Frontend dependencies, testing, and packaging...'
                dir('frontend') {
                    bat 'npm install'
                    bat 'npm run test'
                    bat 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo '🎉 Pipeline finished successfully! App is stable and fully verified.'
        }
        failure {
            echo '❌ Pipeline failed. Check the logs above to identify which tests or builds broke.'
        }
    }
}