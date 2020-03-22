pipeline {
  agent { docker { image 'node:6.3' } }
  stages {
    stage('Build') {
      steps {
        sh 'npm --version'
        sh 'echo "Howzit??"'
      }
    }
    stage('Test') {
      steps {
        sh '''
          echo "Multiple steps dawg!"
          ls -al
          pwd
          '''
      }
    }
  }
  post {
    always {
      echo 'This always be runnin'
    }
    success {
      echo 'Only runs if successful... duh'
    }
    failure {
      echo 'Shit done failed'
      mail to: 'eli9000@gmail.com',
           subject: 'Failed Pipeline: ${currentBuild.fullDisplayName}',
           body: 'Something is wrong with <insert env var>'
    }
    unstable {
      echo 'Runs only if "run" was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}