import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import listingsApi from "../api/posts";

import Card from "../components/Card";

import useApi from "../hooks/useApi";
import { connect } from "react-redux";
import { getPosts } from "../store/reducers";

function HomeScreen(props) {
  let getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
    props.getPosts(getListingsApi.data);
  }, [props.data]);
  //   console.log(getListingsApi.data);
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      {getListingsApi.loading && (
        <ActivityIndicator size="large" color="blue" />
      )}
      {props.data.map((d) => (
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
  getPosts: (data) => dispatch(getPosts(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
