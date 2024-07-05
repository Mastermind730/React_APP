import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import DepartmentList from "../components/DepartmentList";
import { useNavigate } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate=useNavigate();
  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      navigate("/");
      return;
    }

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [navigate]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 400 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-4xl font-semibold my-4">
        Data Representation from a Dummy API
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="h-96">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <DataGrid rows={posts} columns={columns} autoPageSize />
            )}
          </div>
        </div>
        <h1 className="text-center font-semibold text-3xl my-2">
          Department and  SubDepartments
        </h1>
        <DepartmentList />
      </div>
    </div>
  );
};

export default SecondPage;
