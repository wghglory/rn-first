import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {companyList} from '../../data';

const wWidth = Dimensions.get('window').width;

export default class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contentList: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        contentList: companyList.list,
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const {isLoading, contentList} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator animating={true} color="blue" size="large" />
        ) : (
          <FlatList
            style={styles.contentList}
            data={contentList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        )}
      </View>
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        style={styles.itemContent}
        onPress={() => {
          this.props.navigation.navigate('CompanyDetail');
        }}>
        <View>
          <View style={styles.pNameContent}>
            <ImageBackground style={styles.pImage} source={{uri: item.logo}} />
            <Text>{item.location}</Text>
            <Text>{`|${item.type}\n|${item.size}\n|${item.employee}\n`}</Text>
          </View>
          <View style={styles.pLine} />
          <Text
            style={{
              marginTop: 10,
              height: 20,
              fontSize: 12,
            }}>{`热招：${item.hot}等`}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  _keyExtractor = (item, index) => `index_${index}_${item}`;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentList: {
    flex: 1,
    width: wWidth,
    backgroundColor: 'rgb(214,242,246)',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: 130,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pImage: {
    width: 40,
    height: 40,
  },
  pNameContent: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pLine: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
