import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, Dimensions, Platform, StatusBar } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');
const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 95 : 70;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 47 : StatusBar.currentHeight;

const DetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${movieId}`)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { paddingTop: STATUSBAR_HEIGHT }]}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  if (!movie) {
    return (
      <View style={[styles.errorContainer, { paddingTop: STATUSBAR_HEIGHT }]}>
        <Text style={styles.errorText}>Movie details not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container} 
      bounces={false}
      contentContainerStyle={[
        styles.scrollContent,
        { paddingTop: STATUSBAR_HEIGHT }
      ]}
    >
      <View style={styles.imageContainer}>
        {movie.image ? (
          <Image
            source={{ uri: movie.image.original || movie.image.medium }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>No Image Available</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{movie.name}</Text>
        
        <View style={styles.infoContainer}>
          {movie.rating?.average && (
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingValue}>{movie.rating.average}</Text>
              <Text style={styles.ratingIcon}>★</Text>
            </View>
          )}

          {movie.genres && (
            <View style={styles.genresContainer}>
              {movie.genres.map((genre, index) => (
                <View key={index} style={styles.genreTag}>
                  <Text style={styles.genreText}>{genre}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.detailsCard}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Language</Text>
              <Text style={styles.detailValue}>{movie.language || 'N/A'}</Text>
            </View>
            <View style={[styles.detailRow, styles.borderTop]}>
              <Text style={styles.detailLabel}>Premiered</Text>
              <Text style={styles.detailValue}>{movie.premiered || 'N/A'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Summary</Text>
          <Text style={styles.summary}>
            {movie.summary?.replace(/<\/?[^>]+(>|$)/g, '') || 'No summary available.'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingBottom: TAB_BAR_HEIGHT + 20,
  },
  imageContainer: {
    width: width,
    height: 450,
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 18,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    marginBottom: 24,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingValue: {
    color: '#ffd700',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 4,
  },
  ratingIcon: {
    color: '#ffd700',
    fontSize: 20,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  genreTag: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  detailsCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  detailLabel: {
    color: '#888',
    fontSize: 16,
  },
  detailValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  summaryContainer: {
    marginBottom: 24,
  },
  summaryTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  summary: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    color: '#ff6347',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;