import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        // Filter out movies without images
        const moviesWithImages = response.data.filter(item => item.show.image?.medium);
        setMovies(moviesWithImages);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.searchBarContainer} 
        onPress={() => navigation.navigate('Search')}
        activeOpacity={0.8}
      >
        <TextInput
          style={styles.searchBar}
          placeholder="Search Movies..."
          placeholderTextColor="#888"
          editable={false}
        />
      </TouchableOpacity>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Details', { movieId: item.show.id })}
            style={styles.cardContainer}
            activeOpacity={0.7}
          >
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                {item.show.image?.medium ? (
                  <Image 
                    source={{ uri: item.show.image.medium }} 
                    style={styles.thumbnail}
                    resizeMode="cover"
                  />
                ) : (
                  <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>No Image</Text>
                  </View>
                )}
              </View>
              <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{item.show.name}</Text>
                {item.show.rating?.average && (
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>{item.show.rating.average}</Text>
                    <Text style={styles.ratingIcon}>★</Text>
                  </View>
                )}
                {item.show.genres?.length > 0 && (
                  <Text style={styles.genres} numberOfLines={1}>
                    {item.show.genres.slice(0, 2).join(' • ')}
                  </Text>
                )}
                <Text style={styles.summary} numberOfLines={2}>
                  {item.show.summary?.replace(/<\/?[^>]+(>|$)/g, '') || 'No description available'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBarContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  searchBar: {
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 12,
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 80
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 12,
  },
  imageContainer: {
    width: 120,
    height: 160,
    backgroundColor: '#2a2a2a',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
  },
  info: {
    flex: 1,
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    color: '#ffd700',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 2,
  },
  ratingIcon: {
    color: '#ffd700',
    fontSize: 12,
  },
  genres: {
    color: '#888',
    fontSize: 14,
    marginBottom: 6,
  },
  summary: {
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;