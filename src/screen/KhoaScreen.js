import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import data from '../Json/data.json';

function KhoaScreen({ navigation }) {
  const [khoa, setKhoa] = useState([]);

  useEffect(() => {
    setKhoa(data.Khoa);
  }, []);

  return (
    <View>
      {khoa.map(khoaItem => (
        <TouchableOpacity
          key={khoaItem.idKhoa}
          onPress={() => navigation.navigate('Nganh', { idKhoa: khoaItem.idKhoa })}
          style={{
            backgroundColor: '#008CBA',
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>{khoaItem.tenKhoa}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default KhoaScreen;