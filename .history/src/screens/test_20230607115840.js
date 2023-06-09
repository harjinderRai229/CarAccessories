import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Voice from '@react-native-voice/voice';

const YourComponent = () => {
  const [results, setResults] = React.useState([]);
  const [isRecording, setIsRecording] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorhandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStartHandler = () => {
    setIsRecording(true);
  };

  const onSpeechEndHandler = () => {
    Voice.stop();
  };

  const onSpeechResultsHandler = (e) => {
    setResults(e.value);
    onStopRecording();
  };

  const onSpeechErrorhandler = (e) => {
    setError(e);
  };

  const onStartButtonPress = async () => {
    try {
      Voice.start('en-US');
    } catch (error) {
      console.log('error :: voice recorder :: Start ::: ', error);
    }
  };

  const onStopRecording = async () => {
    try {
      Voice.stop();
    } catch (error) {
      console.log('error :: voice recorder :: End ::: ', error);
    }
    onClose();
  };

  const onClose = () => {
    // Handle closing or resetting the recording state
  };

  return (
   <V
  );
};

export default YourComponent;