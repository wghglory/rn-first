import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';

import jsonData from './data.json';

const {width} = Dimensions.get('window');

export default class CityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
      isLoading: true,
      isRefresh: false,
    };

    this._fetchData();
  }

  //网络请求
  _fetchData() {
    setTimeout(() => {
      this.setState({
        dataList: jsonData,
        isLoading: false,
      });
    }, 2000);
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log('点击了')}>
        <Text style={styles.item}>城市名：{item.name}</Text>
      </TouchableOpacity>
    );
  };

  renderListView() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          style={{flex: 1, backgroundColor: '#fff'}}
          data={this.state.dataList}
          renderItem={this._renderItem}
          // ListEmptyComponent  当没有数据的时候显示
          ListHeaderComponent={this._renderListHeader}
          ListFooterComponent={this._renderListFooter}
          //添加分割线
          ItemSeparatorComponent={() => {
            return <View style={{height: 1, backgroundColor: '#999'}} />;
          }}
          keyExtractor={this._uniqueKey}
          refreshControl={
            <RefreshControl
              title={'loading'}
              colors={['red']}
              refreshing={this.state.isRefresh}
              onRefresh={() => {
                this.setState({
                  isRefresh: true,
                });
                console.log('刷新');
                setTimeout(() => {
                  this.setState({
                    isRefresh: false,
                  });
                }, 2000);
              }}
            />
          }
          onEndReached={() => {
            console.log('onEndReached');
          }}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loadingStyle}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    } else {
      return this.renderListView();
    }
  }

  _renderListHeader() {
    return (
      <View style={styles.header}>
        <Text style={{color: 'white'}}>头部布局</Text>
      </View>
    );
  }

  _renderListFooter() {
    return (
      <View style={styles.footer}>
        <Text style={{color: 'white'}}>尾部布局</Text>
      </View>
    );
  }

  _uniqueKey(item, index) {
    return 'index' + index + item;
  }
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
    marginLeft: 10,
  },
  header: {
    width,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
