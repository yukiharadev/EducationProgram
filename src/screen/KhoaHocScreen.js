import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import data from '../Json/data.json';

function KhoaHocScreen({ route, navigation }) {
  const { idKhoa, idNganh } = route.params;
  const [khoaHocList, setKhoaHocList] = useState([]);

  useEffect(() => {
    setKhoaHocList(data.KhoaHoc);
  }, []);

  return (
    <View>
      {khoaHocList.map(khoaHoc => (
        <TouchableOpacity
          key={khoaHoc.idKhoaHoc}
          onPress={() => navigation.navigate('ChiTietKhoaHoc', { idKhoaHoc: khoaHoc.idKhoaHoc, idKhoa: idKhoa, idNganh: idNganh })}
          style={{
            backgroundColor: '#008CBA',
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>{khoaHoc.tenKhoaHoc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default KhoaHocScreen;
