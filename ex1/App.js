import React from 'react';
import { FlatList, SafeAreaView, StyleSheet,Text } from 'react-native';
import NotificationItem from './NotificationItem';


const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    content: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    timestamp: '20/08/2020, 06:00',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    timestamp: '20/08/2020, 06:00',
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Thông Báo</Text>
    <FlatList style={styles.flatlist}
      data={DATA}
      renderItem={({ item }) => <NotificationItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "20",
    fontWeight: 'bold',
    textAlign: 'center',
    margin: "20"
  },
  flatlist: {
    backgroundColor: '#b8e5fc',
  },
});

export default App;