import { useState } from 'react';
import { ActivityIndicator, Button, Text, View, SafeAreaView } from 'react-native';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const startLoading = () => {
    setIsLoading(true);
    // Ensure loading screen is show for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <ActivityIndicator size="small">Loading...</ActivityIndicator>
        ) : (
          <>
            <Text>Testing</Text>
            <Button
              title="Test Loading"
              onPress={startLoading}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Loading;
