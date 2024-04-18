import sys
import pandas as pd
import numpy as np

if __name__ == "__main__":
    # Read the input CSV file from the root directory
    input_csv = "data.csv"

    # Load the DataFrame from the input CSV file
    df = pd.read_csv(input_csv)

    # Replace column names with your specified headers
    df.columns = [
        "Board",
        "Profession",
        "Owner/Primary Name",
        "Series/Rank",
        "Class Modifier",
        "Mailing Street Address",
        "Mailing Address Line 2",
        "Mailing Address Line 3",
        "Mailing City",
        "Mailing State",
        "Mailing Zip Code",
        "Mailing County Code",
        "Business or DBA Name",
        "Location Street Address",
        "Location Address 2",
        "Location Address 3",
        "Location City",
        "Location State",
        "Location Zip Code",
        "Location County Code",
        "License Number",
        "License Primary Status Code",
        "License Secondary Status Code",
        "Original Issue Date",
        "Effective Date",
        "Expiration Date",
        "Test0",
        "Test1",
        "Test2"
    ]

    # Save the modified DataFrame to a new CSV file named "df_data.csv"
    output_csv = "df_data.csv"
    df.to_csv(output_csv, index=False)

    print(f"Modified DataFrame saved as: {output_csv}")
