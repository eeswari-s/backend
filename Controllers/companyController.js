import Company from "../Models/companyModel.js";
import Job from "../Models/jobModel.js";

// ✅ 1. Save or Update Company Details
export const saveCompanyDetails = async (req, res) => {
  try {
    const { name, website, industry, logo, about, contact } = req.body;

    // Check if company profile exists
    let company = await Company.findOne({ userId: req.user.id });
  

    if (company) {
      // Update existing profile
      company.name = name || company.name;
      company.website = website || company.website;
      company.industry = industry || company.industry;
      company.logo = logo || company.logo;
      company.about = about || company.about;
      company.contact = contact || company.contact;

      await company.save();
      return res.json({ message: "Company profile updated successfully", company });
    } else {
      // Create new profile
      const newCompany = await Company.create({
        userId: req.user.id,
        name,
        website,
        industry,
        logo,
        about,
        contact,
        status: "pending", // approval from admin
      });

      return res.status(201).json({ message: "Company profile created successfully", company: newCompany });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ 2. View Company Personal Data
export const viewCompanyDetails = async (req, res) => {
  try {
    const company = await Company.findOne({ userId: req.user.id });
    if (!company) return res.status(404).json({ message: "Company profile not found" });

    res.json(company);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ 3. Post a Job
export const postJob = async (req, res) => {
  try {
    const { title, description, salary, skills, deadline } = req.body;

    const company = await Company.findOne({ userId: req.user.id });
    if (!company) return res.status(404).json({ message: "Company profile not found" });

    if (company.status !== "approved") {
      return res.status(403).json({ message: "Company not approved by admin" });
      
    }

    const job = await Job.create({
      companyId: company._id,
      title,
      description,
      salary,
      skills,
      deadline,
    });

    res.status(201).json({ message: "Job posted successfully", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};