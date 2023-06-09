import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Voice from '@react-native-voice/';

const ExampleComponent = () => {
  const [results, setResults] = React.useState([]);
  const [isRecording, setIsRecording] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;
    Voice.onSpeechError = onSpeechErrorHandler;
    
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

  const onSpeechErrorHandler = (e) => {
    setError(e);
  };

  const onStartButtonPress = async () => {
    try {
      Voice.start('en-US');
    } catch (error) {
      console.log('Error - Voice Recorder - Start: ', error);
    }
  };

  const onStopRecording = async () => {
    try {
      Voice.stop();
    } catch (error) {
      console.log('Error - Voice Recorder - End: ', error);
    }
    onClose();
  };

  const onClose = () => {
    // Add your logic here for what should happen after recording ends
  };

  return (
    <>
      <TouchableOpacity onPress={onStartButtonPress}>
        <Text>Start Recording</Text>
      </TouchableOpacity>

      {results.length > 0 && (
        <Text>Recognition Result: {results[0]}</Text>
      )}
    </>
  );
};

export default ExampleComponent;
