import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Read the CSV data
data = pd.read_csv("data.csv")

# Convert string values to numeric
data = data.apply(pd.to_numeric, errors="coerce")

# Reset the index to use sensor names as x-axis labels

# Create a heatmap with a grayscale color map
heatmap = sns.heatmap(data, cmap="gray")

# Set labels and title
heatmap.set_ylabel("Time (ms)")
heatmap.set_xlabel("Sensor")
heatmap.set_title("Grayscale Heatmap")

plt.savefig("heatmap.svg")

# Show the plot
plt.show()
