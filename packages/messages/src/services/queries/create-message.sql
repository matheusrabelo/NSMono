INSERT INTO messages (
    "text",
    "cron",
)
VALUES ($1, $2)
RETURNING ("id");
