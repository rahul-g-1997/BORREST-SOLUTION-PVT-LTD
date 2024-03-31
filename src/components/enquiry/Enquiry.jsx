import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
} from "@mui/material";

// Enquiry Component
const Enquiry = () => {
  // State to store the list of enquiries
  const [enquiries, setEnquiries] = useState([]);

  // Fetch enquiries from the server when the component mounts
  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/enquiries");
        console.log("Enquiries data:", response.data.data); // Log the response data
        setEnquiries(response.data.data); // Set the enquiries state
      } catch (error) {
        console.error("Error fetching enquiries:", error); // Log any errors
      }
    };

    fetchEnquiries();
  }, []);

  // Function to handle enquiry deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/enquiries/${id}`);
      console.log("Enquiry deleted successfully");
      // Remove the deleted enquiry from the list
      setEnquiries((prevEnquiries) =>
        prevEnquiries.filter((enquiry) => enquiry.id !== id)
      );
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  // Render the component
  return (
    <div>
      {/* Heading */}
      <Typography
        sx={{
          color: "#046f3b",
          fontFamily: "Carter One, sans-serif",
        }}
        variant="h4"
        align="center"
        gutterBottom
        margin={1}
      >
        Enquiries
      </Typography>

      {/* Display enquiries in a table */}
      {enquiries.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.contact}</TableCell>
                <TableCell>{enquiry.message}</TableCell>
                <TableCell>
                  {/* Delete button for each enquiry */}
                  <Button
                    onClick={() => handleDelete(enquiry.id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        // Message displayed when there are no enquiries
        <Typography variant="body1">No enquiries found.</Typography>
      )}
    </div>
  );
};

export default Enquiry;
