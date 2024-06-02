"use client";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import s from "./services.module.scss";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000", // Update with your actual GraphQL server URL
  cache: new InMemoryCache(),
});

const GET_SERVICES = gql`
  query GetServices {
    services {
      title
      price
      description
    }
  }
`;

type Service = {
  title: string;
  price: string;
  description: string;
};

type GetServicesData = {
  services: Service[];
};

const Services = () => {
  const { loading, error, data } = useQuery<GetServicesData>(GET_SERVICES, {
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <article className={s.services}>
      <Typography className={clsx(s.title)} variant="body1">
        Spa Services
      </Typography>
      <div className={clsx(s.line)}></div>
      <div>
        <ul className={clsx(s.list)}>
          {data?.services.map(({price, description, title}) => (
            <li key={title}>
              <Typography variant="body1">{title}</Typography>
              <Typography className={clsx(s.price)} variant="body1">{price}</Typography>
              <Typography className={clsx(s.description)} variant="body1">{description}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default Services;