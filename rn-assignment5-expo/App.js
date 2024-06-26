import React, { useState, createContext, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Switch, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Theme Context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Styles
const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // ... other light theme styles
  header: {
    padding: 20,
    backgroundColor: '#fffff',
   
    flexDirection: 'row', // Arrange header elements horizontally
    alignItems: 'center', // Align items vertically
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsList: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#888',
  },
  pageIndicator: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  pageText: {
    textAlign: 'center',
    fontSize: 14,
  },
  themeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  themeSwitchText: {
    marginRight: 10,
  },
  welcomeText: { // Add this style to lightTheme
    color: '#000', // Set text color to black
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeTexts: { // Add this style to darkTheme
    color: '#808080', 
    fontSize: 15,
    
    
  },
  transactionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-around', // Distribute items evenly
    padding: 10,
    marginTop: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
 

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  searchImage: {
    width: 25,
    height: 25,
    marginLeft: 'auto', // Push to the right
  },
  cardImage: {
    width: '90%', // Make the card image take up most of the screen width
    height: 200, // Set a desired height for the card image
    marginTop: 1, // Add some margin above the card image
    borderRadius: 10, // Add rounded corners to the card image
    alignSelf: 'center',
  },
  roundContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0', // Light gray background for light theme
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
  },
  transactionList: {
    padding: 10,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: '#000', // Adjust color for dark theme
  },
  sellAllText: {
    color: '#00FFFF', // Blue color
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'right',
    textDecorationLine: 'underline', // Underline for hypertext
  },
 
  sellAllButton: { // Add this style for the button
    backgroundColor: '#007bff', // Blue background color
    padding: 10,
    marginTop: 10,
    marginRight: 20, // Push to the right
    borderRadius: 5, // Add rounded corners
  },
  sellAllButtonText: {
    color: '#007bff', // White text color
    fontSize: 16,
    textAlign: 'right', // Center the text
   
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  // ... other dark theme styles
  header: {
    padding: 20,
    backgroundColor: '#222',
    
    flexDirection: 'row', // Arrange header elements horizontally
    alignItems: 'center', // Align items vertically
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsList: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  pageIndicator: {
    padding: 10,
    backgroundColor: '#333',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  pageText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
  },
  themeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  themeSwitchText: {
    marginRight: 10,
    color: '#fff', 
  },
  welcomeText: { // Add this style to darkTheme
    color: '#fff', // Set text color to white
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeTexts: { // Add this style to darkTheme
    color: '#808080', 
    fontSize: 15,
    
    
  },
  transactionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-around', // Distribute items evenly
    padding: 10,
    marginTop: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  transactionText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text under the icon
    marginTop: 5, // Add some spacing between the icon and text
    color: '#fff', // White text for dark theme
  },

  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#fff',
  },
  transactionList: {
    padding: 10,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  searchImage: {
    width: 25,
    height: 25,
    marginLeft: 'auto', // Push to the right
  },
  cardImage: {
    width: '90%', 
    height: 200, // Set a desired height for the card image
     
    borderRadius: 10, // Add rounded corners to the card image
    marginBottom: 20,
    alignSelf: 'center',
  },
  roundContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    color: '#fff', 
  },
  sellAllText: {
    color: '#00FFFF',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'right',
  
  },
 
  sellAllButton: {
    backgroundColor: '#007bff', 
    padding: 10,
    marginTop: 10,
    marginRight: 20, 
    borderRadius: 5, 
  },
  sellAllButtonText: {
    color: '#007bff', 
    fontSize: 16,
    textAlign: 'right', 
   
  },
  dtext: {
    color: "#fff",
  },
 
}); 

// Transaction Data
const transactionData = [
  {
    icon: require('./assets/apple.png'), 
    title: 'Apple Store',
    subtitle: 'Entertainment',
    amount: '- $5,99',
  },
  {
    icon: require('./assets/spotify.png'), 
    title: 'Spotify',
    subtitle: 'Music',
    amount: '- $12,99',
  },
  {
    icon: require('./assets/moneyTransfer.png'), 
    title: 'Money Transfer',
    subtitle: 'Transaction',
    amount: '$300',
  },
  {
    icon: require('./assets/grocery.png'),
    title: 'Grocery',
    subtitle: '',
    amount: '- $88',
  },
 
];

// Home Screen
const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? lightTheme : darkTheme;


  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Image source={item.icon} style={styles.transactionIcon} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.title}</Text>
        {item.subtitle && <Text style={styles.transactionSubtitle}>{item.subtitle}</Text>}
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
        <View style={styles.nameContainer}> 
          <Text style={styles.welcomeTexts}>Welcome back,</Text>
        < Text style={styles.welcomeText}>Eric Atsu</Text>
        </View>
        <Image source={require('./assets/search.png')} style={styles.searchImage} />
      </View>
      <Image source={require('./assets/Card.png')} style={styles.cardImage} />
      <View style={styles.transactionContainer}>
      <View style={styles.nameContainer}>
        <View style={styles.roundContainer}>
          <Image source={require('./assets/send.png')} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{ marginLeft: 20 ,}} >Sent</Text>
        </View>
      <View style={styles.nameContainer}>
        <View style={styles.roundContainer}>
          <Image source={require('./assets/recieve.png')} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{ marginLeft: 20 }}>receive</Text>
      </View>
      <View style={styles.nameContainer}>
        <View style={styles.roundContainer}>
          <Image source={require('./assets/loan.png')} style={{ width: 30, height: 30}} />
        </View>
        <Text style={{ marginLeft: 20 }} >Loan</Text>
      </View>
        <View style={styles.nameContainer}>
        <View style={styles.roundContainer}>
          <Image source={require('./assets/topUp.png')} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={{ marginLeft: 20,}}>Topup</Text>
        </View>
      </View>
     
     
      <Text style={styles.transactionText}>Transaction</Text>
      
       <Text style={styles.sellAllButtonText}>Sell All</Text>
      
     
      <View style={styles.transactionContainer}>
        <FlatList
          data={transactionData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={styles.transactionList} 
        />
      </View>
      
    </View>
  );
};

// Settings Screen
const SettingsScreen = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        {/* Add any icons or other elements for the header */}
      </View>
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Language</Text>
          <Image source={require('./assets/chevron-right.png')} style={styles.chevronIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>My Profile</Text>
          <Image source={require('./assets/chevron-right.png')} style={styles.chevronIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Contact Us</Text>
          <Image source={require('./assets/chevron-right.png')} style={styles.chevronIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Change Password</Text>
          <Image source={require('./assets/chevron-right.png')} style={styles.chevronIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>Privacy Policy</Text>
          <Image source={require('./assets/chevron-right.png')} style={styles.chevronIcon} />
        </TouchableOpacity>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>Theme</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={theme === 'dark'}
          />
        </View>
      </View>
      <View style={styles.pageIndicator}>
        <Text style={styles.pageText}>Page 2 / 4</Text>
      </View>
    </View>
  );
};

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;