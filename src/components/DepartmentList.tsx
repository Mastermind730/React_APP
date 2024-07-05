import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const departmentData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"]
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"]
  }
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (deptName: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [deptName]: !prevOpen[deptName] }));
  };

  return (
    <div className="w-full max-w-xs">
      <List className="divide-y divide-gray-200">
        {departmentData.map(department => (
          <React.Fragment key={department.department}>
            <ListItem
              button
              onClick={() => handleClick(department.department)}
              className="group hover:bg-gray-50"
            >
              <ListItemText primary={department.department} />
              <IconButton edge="end" aria-label="expand">
                {open[department.department] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItem>
            <Collapse in={open[department.department]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.sub_departments.map(subDept => (
                  <ListItem key={subDept} className="pl-8">
                    <ListItemText primary={subDept} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default DepartmentList;
