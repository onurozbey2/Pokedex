import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Label from '../../components/Label';
import Evolutions from '../../components/Evolutions';

import {useQuery} from '@apollo/react-hooks';
import {POKEMON_QUERY} from './queries';

const Detail = ({route}) => {
  const {id} = route.params;

  const {error, loading, data} = useQuery(POKEMON_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {name, image, types, weaknesses, evolutions} = data.pokemon;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <Text style={styles.name}>{name}</Text>

      <Label title="Types" data={types} />
      <Label title="Weaknesses" data={weaknesses} />
      <Evolutions data={evolutions} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    height: 200,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
    borderColor: '#999',
    padding: 5,
  },
});
export default Detail;
