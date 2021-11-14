import user from '../utils/user';

const userRoute = app => {
  app.get('/user', (req, res) => {
    const users = user.getUsers();

    res.status(200).send({users});
  });

  app.post('/user', (req, res) => {
    const users = user.getUsers();

    users.push(req.body);
    user.save(users);

    res.status(201).send('OK');
  });

  app.put('/user/:id', (req, res) => {
    const users = user.getUsers();

    user.save(users.map(user => {
      if(user.id === req.params.id) {
        return {
          ...user,
          ...req.body,
        }
      }
      return user
    }));

    res.status(200).send('OK');
  });

  app.delete('/user/:id', (req, res) => {
    const users = user.getUsers();

    user.save(users.filter(user => user.id !== req.params.id));
    res.status(200).send('OK');
  });
}

export default userRoute;
