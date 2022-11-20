const HomeScreen = ({ navigation, route }) => {
  return (
    <button
      onClick={() => {
        navigation.navigate("Pokemon");
      }}
      style={{ width: 200 }}
    >
      View
    </button>
  );
};

export default HomeScreen;
