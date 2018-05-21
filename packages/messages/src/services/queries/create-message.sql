INSERT INTO messages (
    "text"
)
VALUES ($1)
RETURNING ("id");
