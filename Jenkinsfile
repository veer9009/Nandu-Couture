pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nandu-couture:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f nandu-couture || true'
                sh 'docker run -d --name nandu-couture -p 80:80 nandu-couture:${BUILD_NUMBER}'
            }
        }

        stage('Health Check') {
            steps {
                sh 'sleep 3'
                sh 'curl -f http://localhost'
            }
        }
    }
}
