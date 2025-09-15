const routes = (handler) => [
  {
    method: "POST",
    path: "/users",
    handler: handler.postUserHandler,
  },
  // {
  //   method: "GET",
  //   path: "/notes",
  //   handler: handler.getNotesHandler,
  // },
  {
    method: "GET",
    path: "/users/{id}",
    handler: handler.getUserByIdHandler,
  },
  // {
  //   method: "PUT",
  //   path: "/notes/{id}",
  //   handler: handler.putNoteByIdHandler,
  // },
  // {
  //   method: "DELETE",
  //   path: "/notes/{id}",
  //   handler: handler.deleteNoteByIdHandler,
  // },
];

module.exports = routes;
