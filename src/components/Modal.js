import React from "react";
import PropTypes from "prop-types";
import { Modal as RNModal, StyleSheet, View, FlatList } from "react-native";

import theme from "../theme";
import Button from "./Button";

function Modal(props) {
  const { isVisible, setVisibleModal, data, renderItem, otherProps } = props;
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setVisibleModal(false);
      }}
      {...otherProps}
    >
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            extraData={data}
            renderItem={({ item }) => renderItem(item)}
            ListFooterComponent={
              <Button title={"Close"} onPress={() => setVisibleModal(false)} />
            }
          />
        </View>
      </View>
    </RNModal>
  );
}

Modal.defaultProps = {
  isVisible: false,
  setModalVisible: () => {},
  data: [],
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  setVisibleModal: PropTypes.func,
  data: PropTypes.array,
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.transparentModal,
    padding: theme.padding.default,
  },
  modalContainer: {
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: theme.padding.default,
    paddingVertical: theme.padding.default,
    borderRadius: theme.borderRadius.default,
    minWidth: 150,
    minHeight: 100,
  },
});

export default Modal;
