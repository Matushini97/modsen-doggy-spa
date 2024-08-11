"use client";
import clsx from "clsx";
import s from "./info-page.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui";
import { DogCard } from "@/components/ui/dog-card/dog-card";

import { useQuery, gql } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const GET_DOGS = gql`
  query GetDogs($name: String) {
    dogs(name: $name) {
      imageLink
      goodWithChildren
      goodWithOtherDogs
      shedding
      grooming
      drooling
      coatLength
      goodWithStrangers
      playfulness
      protectiveness
      trainability
      energy
      barking
      minLifeExpectancy
      maxLifeExpectancy
      maxHeightMale
      maxHeightFemale
      maxWeightMale
      maxWeightFemale
      minHeightMale
      minHeightFemale
      minWeightMale
      minWeightFemale
      name
    }
  }
`;

const InfoPage = () => {
  const { loading, error, data } = useQuery(GET_DOGS, {
    client,
    variables: { name: "golden retriever" },
  });
  return (
    <div className={clsx(s.infoWrapper)}>
      <Typography className={clsx(s.title)}>INFO DOG</Typography>
      <div className={clsx(s.search)}>
        <Typography>
          Current Selection:{" "}
          <span className={clsx(s.selection)}>Beds&Cushionfdfdf</span>
        </Typography>
        <div className={clsx(s.textField)}>
          <TextField isSearch={true} placeholder="Search" />
        </div>
      </div>
      {data?.name}
      {/* <DogCard /> */}
    </div>
  );
};

export default InfoPage;
