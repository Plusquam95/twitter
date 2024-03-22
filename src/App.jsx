import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    username: 'erwinrane',
    name: 'Erwin Ramos Nevárez',
  },
  {
    username: 'johnkrasinski',
    name: 'im Halpert',
  },
  {
    username: 'jennafischer',
    name: 'Jenna Fischer',
  },
  {
    username: 'rainnwilson',
    name: 'Rainn Wilson',
  },
];
const format = username => `@${username}`;

export function App() {
  return (
    <section className="container-tw-fw">
      {users.map(user => {
        const { username, name } = user;
        return (
          <TwitterFollowCard
            key={username}
            username={username}
            name={name}
            format={format}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}
