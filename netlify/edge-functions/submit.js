export default (req, ctx) => {
  console.log(req);
  console.log(JSON.stringify(req.body));

  console.log(ctx);
  return ctx.json(
    { message: 'success' },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST',
      },
    }
  );
};
