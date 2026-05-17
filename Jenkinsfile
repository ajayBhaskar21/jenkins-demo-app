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
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Build & Test Backend') {
            steps {
                echo 'Installing Backend dependencies and running tests...'
                dir('backend') {
                    sh 'npm install'
                    sh 'NODE_ENV=test npm test'
                }
            }
        }

        stage('Build & Test Frontend') {
            steps {
                echo 'Installing Frontend dependencies, testing, and packaging...'
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run test'
                    sh 'npm run build'
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