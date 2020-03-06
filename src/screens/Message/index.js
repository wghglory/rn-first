import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  Text,
  Button,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {updateUser, getUsersAsync} from '../../actions';

const {width} = Dimensions.get('window');

class Message extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    this.props.getAllUsersAsync();
  }

  render() {
    const {userState, editUser, getAllUsersAsync} = this.props;
    const {loading, data, error} = userState;

    return (
      <SafeAreaView style={styles.container}>
        {loading ? this.renderLoadingView() : this.renderListView(data)}

        <TextInput
          placeholder="change username where userid = 1"
          value={this.state.username}
          onChangeText={username => this.setState({username})}
        />

        <Button
          onPress={() => editUser({id: 1, name: this.state.username})}
          title="Confirm"
        />

        <Text>
          If you edit user 1 and click this, notice the user list will recover.
        </Text>

        <Button onPress={getAllUsersAsync} title="Refresh Users" />
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

  renderListView(data) {
    return (
      <FlatList
        style={styles.dataList}
        data={data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        // ListEmptyComponent  当没有数据的时候显示
        // ListHeaderComponent={this._renderListHeader}
        // ListFooterComponent={this._renderListFooter}
        // //添加分割线
        // ItemSeparatorComponent={() => {
        //   return <View style={{height: 1, backgroundColor: '#999'}} />;
        // }}
        refreshControl={
          <RefreshControl
            title={'loading'}
            colors={['red']}
            // refreshing={}
            onRefresh={() => {
              this.props.getAllUsersAsync(); // load more
            }}
          />
        }
        onEndReached={() => {
          console.log('onEndReached');
        }}
        onEndReachedThreshold={0.1}
      />
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContent}
        activeOpacity={0.5}
        onPress={() => console.log('点击了')}>
        <Text style={styles.item}>
          {item.id} | {item.name} | {item.email}
        </Text>
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item, index) => `index_${index}_${item}`;
}

function mapStateToProps(state) {
  return {userState: state.user};
}

function mapDispatchToProps(dispatch) {
  return {
    editUser: payload => {
      dispatch(updateUser(payload));
    },

    getAllUsersAsync: () => {
      dispatch(getUsersAsync());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataList: {
    width,
    flex: 1,
    backgroundColor: 'rgb(214,242,246)',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  loadingStyle: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
