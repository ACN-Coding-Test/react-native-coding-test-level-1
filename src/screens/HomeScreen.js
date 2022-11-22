const HomeScreen = ({ navigation, route }) => {
  return (
    <button
      onClick={() => {
        navigation.navigate("Form");
      }}
      style={{ width: 200 }}
    >
      Contact Us
    </button>
  );
};

export default HomeScreen;
