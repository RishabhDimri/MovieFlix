import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.95);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      })
    ]).start();

    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.appNameFirst}>Movie</Text>
            <Text style={styles.appNameSecond}>Flix</Text>
          </View>
          <Text style={styles.tagline}>Your Movies, Your Way</Text>
          
          {/* Decorative elements */}
          <View style={styles.decorativeLine} />
          
          {/* Additional decorative circles */}
          <View style={styles.circles}>
            <View style={[styles.circle, styles.circle1]} />
            <View style={[styles.circle, styles.circle2]} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    backgroundImage: 'linear-gradient(to bottom, #1a1a1a 0%, #000 100%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appNameFirst: {
    fontSize: 48,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
    textShadowColor: 'rgba(255, 99, 71, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  appNameSecond: {
    fontSize: 48,
    fontWeight: '800',
    color: '#ff6347',
    letterSpacing: 1,
    textShadowColor: 'rgba(255, 99, 71, 0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  decorativeLine: {
    width: 40,
    height: 4,
    backgroundColor: '#ff6347',
    borderRadius: 2,
    marginTop: 24,
    opacity: 0.8,
  },
  circles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  circle: {
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'rgba(255, 99, 71, 0.1)',
  },
  circle1: {
    width: 200,
    height: 200,
    top: -100,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    bottom: -50,
    left: -50,
  },
});

export default SplashScreen;