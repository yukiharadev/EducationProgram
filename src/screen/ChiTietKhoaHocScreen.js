import React from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';
import data from '../Json/data.json';

function ChiTietKhoaHocScreen({ route }) {
  const { idKhoa, idNganh, idKhoaHoc } = route.params;
  const danhMucCTDT = data.DanhMucCTDT.find(item => item.idNganh == idNganh && item.idKhoaHoc == idKhoaHoc);
  const cauTrucCTDT = danhMucCTDT ? data.CauTrucCTDT.find(item => item.maDMCTDT == danhMucCTDT.maDMCTDT) : null;
  const chiTietCTDT = cauTrucCTDT ? data.ChiTietCTDT.filter(item => item.idctctdt == cauTrucCTDT.idctctdt) : [];
  const hocPhan = chiTietCTDT.map(ctctdt => data.HocPhan.filter(item => item.idHocPhan == ctctdt.idHocPhan && item.idKhoa == idKhoa)).flat();

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Tên học phần</DataTable.Title>
          <DataTable.Title numeric>Số tín chỉ</DataTable.Title>
        </DataTable.Header>
        {hocPhan.map((hp, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{hp.tenHocPhan}</DataTable.Cell>
            <DataTable.Cell numeric>{hp.soTinChi}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

export default ChiTietKhoaHocScreen;
