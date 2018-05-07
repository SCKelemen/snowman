class Magic {
    public Items: MagicInternals[];
}

/* 

( Snowflake >> offset ) + Epoch // take high bits
( Snowflake & Mask ) >> offset
( Snowflake & Mask ) >> offset
( Snowflake & Mask )

*/