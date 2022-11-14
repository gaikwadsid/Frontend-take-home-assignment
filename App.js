import { React, useState}  from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput, Alert, TouchableOpacity, RecyclerViewBackedScrollViewComponent, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

const Separator = () => (
  <View style={styles.separator} />
);



const AddScreen = ( ) => {
  const [people, setPeople] = useState([])
  const [firstname, onChangeFirstName] = useState(null);
  const [lastname, onChangeLastName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [isMember, setIsMember] = useState(true);

  const saveData = ( {firstname, lastname, email, number, isMember}) => {
    data = [firstname, lastname, email, number, isMember];
    const temp = people.concat(data);
    setPeople(temp);
  }

   return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.formText}> Info </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={onChangeFirstName}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={onChangeLastName}
        value={lastname}
        
      />
      <TextInput
        style={styles.input}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="123-456-7890"
        onChangeText={onChangeNumber}
        value={number}
      />
      <Text style = {styles.formText}> Role </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={{position: 'absolute', left: 10}}> Regular - Can't delete members</Text>
        <Checkbox style={styles.checkbox} value={isMember} onValueChange={setIsMember}/>
      </View>
      <Separator />
      <View style={styles.checkboxContainer}>
        <Text style={{position: 'absolute', left: 10}}> Admin - Can delete members</Text>
        <Checkbox style={styles.checkbox} value={!isMember} onValueChange={setIsMember}/>
      </View>
      <Separator />
      <View>
      </View>
    </SafeAreaView>
   );
};

const EditScreen = () => {

  const [firstname, onChangeFirstName] = useState(null);
  const [lastname, onChangeLastName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [isMember, setIsMember] = useState(true);

  return (
  <SafeAreaView style={styles.container}>

    <View>
      <Text style={styles.formText}> Info </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={onChangeFirstName}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={onChangeLastName}
        value={lastname}
        
      />
      <TextInput
        style={styles.input}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="123-456-7890"
        onChangeText={onChangeNumber}
        value={number}
      />
      <Text style = {styles.formText}> Role </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={{position: 'absolute', left: 10}}> Regular - Can't delete members</Text>
        <Checkbox style={styles.checkbox} value={isMember} onValueChange={setIsMember}/>
      </View>
      <Separator />
      <View style={styles.checkboxContainer}>
        <Text style={{position: 'absolute', left: 10}}> Admin - Can delete members</Text>
        <Checkbox style={styles.checkbox} value={!isMember} onValueChange={setIsMember}/>
      </View>
      <Separator />
    </SafeAreaView>
  );
};


const App = () => {
  const [titleText, setTitleText] = useState("Team members");
  const [subtitleText, setSubtitleText] = useState("You have " + count + " team members.");
  const [buttonTitle, setbuttonTitle] = useState("+")
  const [state, setState] = useState("home")
  const [AddScreenState, setAddScreenState] = useState(false)
  const [EditScreenState, setEditScreenState] = useState(false)

  const [items, setItems] = useState([
    { firstname: 'Adrien', lastname: 'Olzak', isMember: false, number: '415-310-1619', email: 'adrien@instawork.com'},
    { firstname: 'Charlene', lastname: 'Pham', isMember: true, number: '415-310-1619', email: 'charlene@instawork.com'},
    { firstname: 'Benson', lastname: 'Mach', isMember: true, number: '415-310-1619', email: 'benson@instawork.com'},
    { firstname: 'Dan', lastname: 'Petrie', isMember: true, number: '415-310-1619', email: 'dan@instawork.com'},
  ]);

  const [count, setCount] = useState(1); 

  const saveData = ( {firstname, lastname, email, number, isMember}) => {
    // data = [firstname, lastname, email, number, isMember];
    // const temp = people.concat(data);
    // setPeople(temp);
    setTitleText("Team members");
    setSubtitleText("You have " + count + " team members.")
    setbuttonTitle("+")
    setState("home")
    setAddScreenState(false)
    setEditScreenState(false)
  }

  const deleteData = ( {firstname, lastname, email, number, isMember}) => {
    // data = [firstname, lastname, email, number, isMember];
    // const temp = people.concat(data);
    // setPeople(temp);
    setTitleText("Team members");
    setSubtitleText("You have " + count + " team members.")
    setbuttonTitle("+")
    setState("home")
    setEditScreenState(false)
    setCount(items.length)
  }

  
  const onMainPress = () => {
    if (state === "home") {
      setTitleText("Add a team member");
      setSubtitleText("Set email, location and role.")
      setbuttonTitle("X")
      setState("add")
      setAddScreenState(true)
    };

    if (state === "add" || state === "edit") {
      setTitleText("Team members");
      setSubtitleText("You have " + count + " team members.")
      setbuttonTitle("+")
      setState("home")
      setAddScreenState(false)
      setEditScreenState(false)
    };
  };

  const onEditPress = () => {
    setTitleText("Edit team member");
    setSubtitleText("Edit contact info, location and role.")
    setbuttonTitle("X")
    setState("edit")
    setEditScreenState(true)
  }

  

  return (
  <SafeAreaView style={styles.container}>
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
    <Button 
          onPress={onMainPress}
          title={buttonTitle}/>
    </View>
    <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
          {titleText}
          </Text>
          {"\n"}
          {subtitleText}
          {"\n"}
        </Text>
    </View>
    <Separator />
    
    {!AddScreenState && !EditScreenState &&
      <View>

      <TouchableOpacity onPress={onEditPress} style={styles.fleximage}>
      <Image source={require('./greyicon.png')} style={styles.tinyLogo}/>
      <View>
        <Text> {items[0].firstname} {items[0].lastname} (admin) </Text>
        <Text> {items[0].number} </Text>
        <Text> {items[0].email} </Text>
      </View>
      </TouchableOpacity>

      <Separator />

      <TouchableOpacity onPress={onEditPress} style={styles.fleximage}>
      <Image source={require('./greyicon.png')} style={styles.tinyLogo}/>
      <View>
        <Text> {items[1].firstname} {items[1].lastname} </Text>
        <Text> {items[1].number} </Text>
        <Text> {items[1].email} </Text>
      </View>
      </TouchableOpacity>

      <Separator />

      <TouchableOpacity onPress={onEditPress} style={styles.fleximage}>
      <Image source={require('./greyicon.png')} style={styles.tinyLogo}/>
      <View>
        <Text> {items[2].firstname} {items[1].lastname} </Text>
        <Text> {items[2].number} </Text>
        <Text> {items[2].email} </Text>
      </View>
      </TouchableOpacity>

      <Separator />

      <TouchableOpacity onPress={onEditPress} style={styles.fleximage}>
      <Image source={require('./greyicon.png')} style={styles.tinyLogo}/>
      <View>
        <Text> {items[3].firstname} {items[2].lastname} </Text>
        <Text> {items[3].number} </Text>
        <Text> {items[3].email} </Text>
      </View>
      </TouchableOpacity>
      <Separator />
      </View>}
    
      
  
    {AddScreenState && <AddScreen/>}
    {EditScreenState && <EditScreen/>}

    {AddScreenState && <View style={styles.saveButton}>
        <Button
          title="Save"
          onPress={saveData}
        />
    </View>}

    {EditScreenState && <View style={styles.saveanddeleteButton}>
      
      <Button
        title="Delete"
        color={"#ff0000"}
        onPress={deleteData}
      />
      <Button
        title="Save"
        onPress={saveData}
      />
    </View>}

    
  </SafeAreaView>
    );
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    marginHorizontal: 16,
    padding: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  formText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 0,
    padding: 10,
    justifyContent: 'flex-end',
  },
  saveButton:{
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  saveanddeleteButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  fleximage: {
    flexDirection: "row",
  }
});

export default App;