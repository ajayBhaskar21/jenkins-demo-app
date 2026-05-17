pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    // Setting the environment variable here makes it cross-platform
    environment {
        NODE_ENV = 'test'
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
                    bat 'npm test' // Uses the NODE_ENV defined above
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