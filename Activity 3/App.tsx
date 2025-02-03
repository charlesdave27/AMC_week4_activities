import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Morning list:',
  },
   {
    id: '2',
    title: '1. taking a bath',
  },
  {
    id: '3',
    title: '2. look at phone',
  },
  {
    id: '4',
    title: '3. eat breakfast',
  },
  {
    id: '5',
    title: '4. get ready for school',
  },
  {
    id: '6',
    title: '5. commute',
  },
  {
    id: '7',
    title: '6. walking',
  },
  {
    id: '8',
    title: '7. lecture inside of class',
  },
  {
    id: '9',
    title: '8. do activities for school',
  },
  {
    id: '10',
    title: '9. do assignment',
  },
  {
    id: '11',
    title: 'Afternoon list',
  },
  {
    id: '12',
    title: '1. go back home',
  },
  {
    id: '13',
    title: '2. eat lunch',
  },
   {
    id: '14',
    title: '3. play video games',
  },
   {
    id: '15',
    title: '4. watch movies',
  },
   {
    id: '16',
    title: '5. play guitar',
  },
  {
    id: '17',
    title: '6. do assignments',
  },
  {
    id: '18',
    title: '7. Evening list',
  },
  {
    id: '19',
    title: 'cook dinner',
  },
  {
    id: '20',
    title: 'go to friends',
  },
   {
    id: '21',
    title: 'eat dinner',
  },
  {
    id: '22',
    title: 'watch news',
  },
  {
    id: '23',
    title: 'go to sleep',
  },
];

const COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'brown'];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? 'pink' : COLORS[index % COLORS.length]
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;