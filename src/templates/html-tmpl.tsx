export const Html = (props: JSXTE.ElementProps) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>JSXTE Example - TODO App</title>
        <link rel="stylesheet" href="/public/styles.css" />
        <script src="/public/main.js" defer></script>
      </head>
      <body>{props.children}</body>
    </html>
  );
};
