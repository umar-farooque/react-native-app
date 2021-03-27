import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import listingsApi from "../api/posts";

import Card from "../components/Card";
import { connect } from "react-redux";
import { loadPost } from "../store/reducers";

function HomeScreen(props) {
  let [data, setData] = useState([]);
  useEffect(() => {
    props.loadPost();
    setData(props.data);
  }, [props.data !== data]);

  return (
    <ScrollView style={styles.container}>
      {data.map((d) => (
        <Card key={d.id} id={d.id} title={d.title} body={d.body} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

const mapStateToProps = (state) => ({
  data: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadPost: () => dispatch(loadPost()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
