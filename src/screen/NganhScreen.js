import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import data from '../Json/data.json';

function NganhScreen({ route, navigation }) {
  const { idKhoa } = route.params;
  const [nganhList, setNganhList] = useState([]);

  useEffect(() => {
    setNganhList(data.NganhHoc.filter(nganh => nganh.idKhoa === idKhoa));
  }, [idKhoa]);

  return (
    <View>
      {nganhList.map(nganh => (
        <TouchableOpacity
          key={nganh.idNganh}
          onPress={() => navigation.navigate('KhoaHoc', { idKhoa: idKhoa, idNganh: nganh.idNganh })}
          style={{
            backgroundColor: '#008CBA', // màu nền
            padding: 10, // padding
            margin: 10, // margin
            borderRadius: 5, // bo góc
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>{nganh.tenNganh}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default NganhScreen;
